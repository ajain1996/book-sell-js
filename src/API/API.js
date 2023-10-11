export async function getAllBooksAPI(callback) {
    await fetch("http://68.178.162.203:8080/application-test-v1.1/books")
        .then(response => response.json())
        .then(result => {
            callback(result);
            console.log('\n\n getAllBooksAPI success');
        })
        .catch(error => {
            callback(null)
            console.log('\n\n getAllBooksAPI error: ', error)
        });
}

export async function searchAllBooksAPI(query, callback) {
    await fetch("http://68.178.162.203:8080/application-test-v1.1/books?title=" + query)
        .then(response => response.json())
        .then(result => {
            callback(result);
            console.log('\n\n searchAllBooksAPI success');
        })
        .catch(error => {
            callback(null)
            console.log('\n\n searchAllBooksAPI error: ', error)
        });
}

export const createBookAPI = async (data, callBack) => {
    var payload = JSON.stringify({
        "author": data?.author,
        "country": data?.country,
        "language": data?.language,
        "link": data?.link,
        "pages": data?.pages,
        "title": data?.title,
        "year": data?.year,
        "id": data?.id
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
    };

    fetch("http://68.178.162.203:8080/application-test-v1.1/books", requestOptions)
        .then(response => response.json())
        .then(result => {
            callBack(result);
            console.log('\n\n createBookAPI success');
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n createBookAPI error: ', error)
        });
}

export const editBookAPI = async (data, bookId, callBack) => {
    var payload = JSON.stringify({
        "author": data?.author,
        "country": data?.country,
        "language": data?.language,
        "link": data?.link,
        "pages": data?.pages,
        "title": data?.title,
        "year": data?.year,
        "id": data?.id
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
    };

    fetch("http://68.178.162.203:8080/application-test-v1.1/books/" + bookId, requestOptions)
        .then(response => response.json())
        .then(result => {
            callBack(result);
            console.log('\n\n editBookAPI success');
        })
        .catch(error => {
            callBack(null)
            console.log('\n\n editBookAPI error: ', error)
        });
}