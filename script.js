const mainDiv = document.querySelector("#main");

const myload = () => {
    let a = new XMLHttpRequest();

    a.onload = function () {
        if (this.status == 200) {

            // console.log(this.responseText);

            let data = JSON.parse(this.responseText);

            let products = data.filter((e) => {
                return e;
            })



            for (let i of products) {


                var item = document.createElement("div");

                item.setAttribute("class", "itemdiv");

                mainDiv.appendChild(item);


                for (let d in i) {

                    // console.log(d);

                    if (d == "id" || d == "title" || d == "price" || d == "description" || d == "category") {

                        let details = document.createElement("p");

                        let key = document.createElement("span");

                        let keyInfo = document.createTextNode(`${d} : `);

                        key.appendChild(keyInfo);

                        details.appendChild(key)

                        let value = document.createTextNode(i[d]);

                        details.appendChild(value);

                        item.appendChild(details);

                    }
                    else if (d == "image") {

                        let imgDiv = document.createElement("div");

                        imgDiv.setAttribute("class", "imgdiv")

                        let img = document.createElement("img");

                        img.setAttribute("src", i[d]);

                        imgDiv.appendChild(img);

                        item.appendChild(imgDiv)


                    }

                    else if (d == "rating") {

                        for (let r in i[d]) {

                            // console.log((i[d])[r]);

                            let details = document.createElement("p");

                            let key = document.createElement("span");

                            let keyInfo = document.createTextNode(`${r} : `);

                            key.appendChild(keyInfo);

                            details.appendChild(key);

                            let rainginfo = document.createTextNode(i[d][r]);

                            details.appendChild(rainginfo);

                            item.appendChild(details);


                        }


                    }

                }

            }

        }

    }


    a.open('GET', 'https://fakestoreapi.com/products/', true);

    a.send();
}


myload();
