export interface Photo {
  id: number
  postDate: Date
  url: string
  description: string
  allowsComments: boolean
  likes: number
  comments: number
  userId: number 
}