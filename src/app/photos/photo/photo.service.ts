import { environment } from 'src/environments/environment';
import { PhotoComments } from '../photo-details/photo-comments/photo-comments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./photo";

@Injectable({ providedIn: 'root' })
export class PhotoService {
	endpoint = 'photos'
	constructor(private http: HttpClient) { }

	listFromUser(userName: string) {
		return this.http
			.get<Photo[]>(`${environment.API_URL}/${userName}/${this.endpoint}`)
	}

	listFromUserPaginated(userName: string, page: number) {
		const params = new HttpParams().append('page', page.toString())
		return this.http
			.get<Photo[]>(`${environment.API_URL}/${userName}/${this.endpoint}`, { params })
	}


	upload(description: string, allowComments: boolean, file: File) {
		const formData = new FormData()
		formData.append('description', description)
		formData.append('allowComments', allowComments ? 'true' : 'false')
		formData.append('imageFile', file)

		return this.http.post(`${environment.API_URL}/${this.endpoint}/upload`, formData)
	}

	findById(id: string) {
		return this.http.get<Photo>(`${environment.API_URL}/${this.endpoint}/${id}`)
	}

	getComments(photoId: number) {
		return this.http.get<PhotoComments[]>(`${environment.API_URL}/${this.endpoint}/${photoId}/comments`)
	}

	addComment(photoId: number, commentText: string) {
		return this.http.post(`${environment.API_URL}/${this.endpoint}/${photoId}/comments`, commentText)
	}

	removePhoto(photoId: number) {
		return this.http.delete(`${environment.API_URL}/${this.endpoint}/${photoId}`);
	}

}
