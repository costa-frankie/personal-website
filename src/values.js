import data from './values.json';

export function displayValuesContent(){

    return data.values.map(value => /*html*/ `
        <div class="flex-column flex-align-center card card--surface padding-vert-2xl padding-horizon-md gap-md">
            <span class="material-symbols-outlined icon-lg color-${value.color}">${value.icon}</span>
            <h1 class="text-h3 color-${value.color} font-serif">${value.title}</h1>
            <p class="text-p centered muted font-mono width-28ch">${value.description}</p>
        </div>
        `
    ).join('');
}

