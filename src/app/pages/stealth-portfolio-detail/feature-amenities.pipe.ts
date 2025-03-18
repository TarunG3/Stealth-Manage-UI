import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featureAmenities'
})
export class FeatureAmenitiesPipe implements PipeTransform {

  transform(amenities: []): boolean {

    /**
     * If no Amenities are there then hide the div.
     */

    return amenities.every(res => res);
  }

}
