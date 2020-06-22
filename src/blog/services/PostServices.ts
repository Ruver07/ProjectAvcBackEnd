import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { Repository, Entity} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entity/PostEntity'
import { CreatePostDto } from '../dtos/CreatePostDto';


@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postEntityRepository: Repository<PostEntity>) {
    }
    public findAll(): Observable<PostEntity[]> {
        return from(this.postEntityRepository.find())

    }

  public create(createPostDto: CreatePostDto) {
        return this.postEntityRepository.save(createPostDto)
   

      
    } 
  




}