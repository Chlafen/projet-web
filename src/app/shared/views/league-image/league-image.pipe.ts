import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { WorldNews } from 'src/app/common/types/world-news';

@Pipe({
  name: "leagueImage",
})
export class LeagueImagePipe implements PipeTransform {
  transform(id: number): string {
    return `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${id}.png`
  }
}
