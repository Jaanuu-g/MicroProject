import { Component } from '@angular/core';
import { Music } from './music.model';
import { MusicserviceService } from './musicservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  music: Music;
  result: string;
  musicArr: Music[];
  flag: boolean;

  constructor(private service: MusicserviceService) {
    this.music = new Music();
    this.result = "";
    this.musicArr = [];
    this.flag = false;
  }

  insertMusic(data: any) {
    this.music.id = data.id;
    this.music.title = data.title;
    this.music.artist = data.artist;
    this.music.genre = data.genre;
    this.result = this.service.insertMusic(this.music);
  }

  updateMusic(data: any) {
    this.music.id = data.id;
    this.music.title = data.title;
    this.music.artist = data.artist;
    this.music.genre = data.genre;
    this.result = this.service.updateMusic(this.music);
  }

  deleteMusic(data: any) {
    this.result = this.service.deleteMusic(data.id);
  }

  findAllMusic() {
    this.service.findAllMusic();
    setTimeout(() => {
      this.musicArr = this.service.getMusicArr();
      this.flag = true;
    }, 1000); // Adjust timeout as needed
  }

  findMusicById(id: number) {
    this.service.findMusicById(id);
    setTimeout(() => {
      this.musicArr = this.service.getMusicArr();
      this.flag = true;
    }, 1000); // Adjust timeout as needed
  }
}
