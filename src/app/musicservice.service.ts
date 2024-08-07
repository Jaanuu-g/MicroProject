import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music } from './music.model';

@Injectable({
  providedIn: 'root'
})
export class MusicserviceService {
  private url: string;
  private musicArr: Music[];

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3007/musics";
    this.musicArr = [];
  }

  insertMusic(music: Music): string {
    this.http.post<Music>(this.url, music).subscribe();
    return "Music Details Added";
  }

  updateMusic(music: Music): string {
    this.http.put<Music>(`${this.url}/${music.id}`, music).subscribe();
    return "Music Details Updated";
  }

  deleteMusic(id: number): string {
    this.http.delete<void>(`${this.url}/${id}`).subscribe();
    return "Music Details Deleted";
  }

  findAllMusic(): void {
    this.http.get<Music[]>(this.url).subscribe(data => {
      this.musicArr = data;
    });
  }

  findMusicById(id: number): void {
    this.http.get<Music>(`${this.url}/${id}`).subscribe(data => {
      this.musicArr = [data];
    });
  }

  getMusicArr(): Music[] {
    return this.musicArr;
  }
}
