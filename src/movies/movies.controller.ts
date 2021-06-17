import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}
    
    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    @Get('search')
    search(@Query('year') searching: string){
        return `We are searching a movie made after: ${searching}`
    }

    @Get(":id")
    getOne(@Param("id") movieId:number): Movie {
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.movieService.create(movieData);
    }

    @Delete(':id')
    delete(@Param('id') movieId: number){
        return this.movieService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto){
        return this.movieService.update(movieId, updateData);
    }
}
