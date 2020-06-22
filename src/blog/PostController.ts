import { Controller,Get, Post, Body,} from "@nestjs/common";
import { PostService } from "./services/PostServices";
import { Observable} from 'rxjs';
import {PostEntity} from './entity/PostEntity'
import { CreatePostDto } from "./dtos/CreatePostDto";

@Controller('posts')
export class PostController {
   
constructor(private postService: PostService){

}

    @Get()
   findAll(): Observable<PostEntity[]>{
       return this.postService.findAll();

   }

@Post()
   create(@Body()CreatePostDto: CreatePostDto){
    return  this.postService.create(CreatePostDto);
 
   } 
} 