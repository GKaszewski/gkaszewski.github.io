import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Photo } from '../models/photo.model';
import { Post } from '../models/post.model';

@Injectable()
export class ApiService {
    private apiRoot = "http://127.0.0.1:8000/";
    
    constructor(private http : HttpClient){}

    getProjects() {
        return this.http.get<Project[]>(this.apiRoot.concat('projects/project-item/'));
    }

    getPhotos() {
        return this.http.get<Photo[]>(this.apiRoot.concat('gallery/'));
    }

    getPosts() {
        return this.http.get<Post[]>(this.apiRoot.concat('blog/posts/'));
    }

    getPost(slug : string) {
        return this.http.get<Post>(this.apiRoot.concat('blog/posts/').concat(slug));
    }

    getPhoto(slug : string) {
        return this.http.get<Photo>(this.apiRoot.concat('gallery/').concat(slug));
    }
}