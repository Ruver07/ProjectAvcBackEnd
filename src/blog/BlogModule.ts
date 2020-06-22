import { Module, Post} from "@nestjs/common";
import { PostService } from "./services/PostServices";
import { PostController } from "./PostController";
import {TypeOrmModule} from '@nestjs/typeorm';
import {PostEntity} from './entity/PostEntity'



@Module({
    imports: [  
      TypeOrmModule.forFeature([PostEntity]),
            
    
    ],
    controllers: [
      PostController,
    ],
    providers: [ 
      PostService,
    ],
  })
  export class BlogModule{


  }