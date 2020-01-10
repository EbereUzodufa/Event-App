import { FormControl } from '@angular/forms';

export function restrictedWords (words) {
    return (control: FormControl):{[key: string]:any} => {
        if(!words) return null;

        var invalidWord = words.map(w=> control.value.includes(w) ? w : null)
        .filter(w=> w !=null);

        return (invalidWord && invalidWord.length)
            ? {'restrictedWords':invalidWord.join(', ')}
            : null
        }
}
