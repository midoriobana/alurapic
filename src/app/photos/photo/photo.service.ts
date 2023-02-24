import { PhotoComments } from '../photo-details/photo-comments/photo-comments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

	constructor(private http: HttpClient) { }

	listFromUser(userName: string) {
		return this.http
			.get<Photo[]>(`${API}/${userName}/photos`)
	}

	listFromUserPaginated(userName: string, page: number) {
		const params = new HttpParams().append('page', page.toString())
		return this.http
			.get<Photo[]>(`${API}/${userName}/photos`, { params })
	}


	upload(description: string, allowComments: boolean, file: File) {
		const formData = new FormData()
		formData.append('description', description)
		formData.append('allowComments', allowComments ? 'true' : 'false')
		formData.append('imageFile', file)

		return this.http.post(API + '/photos/upload', formData)
	}

	findById(id: string) {
		return this.http.get<Photo>(API + '/photos/' + id)
	}

	getComments(photoId: number) {
		return this.http.get<PhotoComments[]>(API + '/photos/' + photoId + '/comments')
	}

	addComment(photoId: number, commentText: string) {
		return this.http.post(API + '/photos/' + photoId + '/comments', commentText)
	}

}
