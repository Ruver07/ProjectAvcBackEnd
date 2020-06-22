import { Observable } from 'rxjs';
import { PostModel } from 'src/blog/models/PostModel';
export declare class PostService {
    findAll(): Observable<PostModel[]>;
}
