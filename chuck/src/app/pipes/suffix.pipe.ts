import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'suffix'
})
export class SuffixPipe implements PipeTransform {
    transform(value: string, suffix: string, occurences: number = 1) {
        return value + suffix.repeat(occurences);
    }
}