import { PostService } from "./services/PostServices";
import { PostModel } from 'src/blog/models/PostModel';
import { Observable } from 'rxjs';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    findAll(): Observable<PostModel[]>;
}
