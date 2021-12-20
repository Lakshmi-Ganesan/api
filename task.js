//phone information
async function phone() {
    let response = await fetch("https://api-mobilespecs.azharimm.site/v2/brands")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            
            //phone1
            document.querySelector("#id1").innerText = "id:" + data.data[0].brand_id;
            document.querySelector("#name1").innerText = "name:" + data.data[0].brand_name;
            document.querySelector("#count1").innerText = "data:" + data.data[0].device_count;


            let phone1 = document.getElementById("acer");
            let acer = document.createElement("img");
            acer.setAttribute("src", "acer.jpg");
            acer.setAttribute("class", "image");
            phone1.append(acer);










            //phone2
            document.querySelector("#id2").innerText = "id:" + data.data[5].brand_id;
            document.querySelector("#name2").innerText = "name:" + data.data[5].brand_name;
            document.querySelector("#count2").innerText = "data:" + data.data[5].device_count;
            let phone2 = document.getElementById("apple");
            let apple = document.createElement("img");
            apple.setAttribute("src", "apple.jpg");
            apple.setAttribute("class", "image");
            phone2.append(apple);
            //phone3
            document.querySelector("#id3").innerText = "id:" + data.data[83].brand_id;
            document.querySelector("#name3").innerText = "name:" + data.data[83].brand_name;
            document.querySelector("#count3").innerText = "count:" + data.data[83].device_count;
            let phone3 = document.getElementById("realme");
            let realme = document.createElement("img");
            realme.setAttribute("src", "realme.jpg");
            realme.setAttribute("class", "image");
            phone3.append(realme);
            //phone4
            document.querySelector("#id4").innerText = "id:" + data.data[35].brand_id;
            document.querySelector("#name4").innerText = "name:" + data.data[35].brand_name;
            document.querySelector("#count4").innerText = "count:" + data.data[35].device_count;
            let phone4 = document.getElementById("honor");
            let honor = document.createElement("img");
            honor.setAttribute("src", "honor.jpg");
            honor.setAttribute("class", "image");
            phone4.append(honor);

            //phone5

            document.querySelector("#id5").innerText = "id:" + data.data[69].brand_id;
            document.querySelector("#name5").innerText = "name:" + data.data[69].brand_name;
            document.querySelector("#count5").innerText = "count:" + data.data[69].device_count;
            let phone5 = document.getElementById("oneplus");
            let oneplus = document.createElement("img");
            oneplus.setAttribute("src", "oneplus.jpg");
            oneplus.setAttribute("class", "image");
            phone5.append(oneplus);

        })

        .catch((e) => {
            console.log(e);
        })
}
phone()