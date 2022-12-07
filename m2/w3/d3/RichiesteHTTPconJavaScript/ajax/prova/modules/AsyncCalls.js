export class AsyncCalls {
    ajaxCall(_url, _method) { //due parametri che devo dare
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(_method, _url);
            xhr.onload = () => resolve(xhr.response);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }

}