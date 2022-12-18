import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITheme,IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getThemes(maxCount?: number) {
    let url = '/api/themes';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<ITheme[]>(url);
  }

  getTheme(id: string) {
    return this.http.get<ITheme>('/api/themes/' + id);
  }

  createTheme(name: string, text: string) {
    return this.http.post<ITheme>('/api/themes/', { themeName: name, postText: text });
  }

  updateTheme(id: string, name: string, text: string) {
    return this.http.put<ITheme>('/api/themes/' + id, { themeName: name, postText: text });
  }
  newPost(themeId: number, postText: string) {
    // return this.http.put<IPost>('/api/themes/' +themeId +'/posts/', { postText });
    // console.log( this.http.put<IPost>('/api/themes/' +themeId , { postText }));
    
    return this.http.post<ITheme>('/api/themes/' +themeId , { postText });
  }
  newPostLike(postId: string) {
    return this.http.put<IPost>('/api/likes/'+postId ,{});
  }

  deleteThemePost(themeId: string, postId: string) {
    return this.http.delete<ITheme>('/api/themes/' + themeId + '/post' + postId);
  }
}