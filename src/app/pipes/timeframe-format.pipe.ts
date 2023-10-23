import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeframeFormat',
})
export class TimeframeFormatPipe implements PipeTransform {
  // Transform timeframe value to the format "00:00:00."
  transform(timeframe: number): string {
    const hours = Math.floor(timeframe / 3600);
    const minutes = Math.floor((timeframe % 3600) / 60);
    const seconds = Math.floor(timeframe % 60);

    const formattedTime =
      this.padZero(hours) +
      ':' +
      this.padZero(minutes) +
      ':' +
      this.padZero(seconds);

    return formattedTime;
  }

  // Ensure single-digit hours, minutes, and seconds are preceded by a '0' to maintain the desired format
  private padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
