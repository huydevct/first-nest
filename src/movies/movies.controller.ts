import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('search')
    search(@Query('year') searching: string){
        return `We are searching a movie made after: ${searching}`
    }

    @Get("/:id")
    getOne(@Param("id") movieId:string){
        return `This will return movie with id: ${movieId} `;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    delete(@Param('id') movieId: string){
        return `This will delete a movie with id: ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData
        };
    }
}
