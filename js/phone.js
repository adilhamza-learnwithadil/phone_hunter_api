const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data;
    displayPhone(phones)
}

const displayPhone = phones => {
    const containerCard = document.getElementById('phone_container')
    containerCard.textContent = ''

    const showAllCointer = document.getElementById('show_all');
    if(phones.length > 15){
        showAllCointer.classList.remove('hidden')
    }else{
        showAllCointer.classList.add('hidden')
    }

    phones = phones.slice(0,15)

    phones.forEach(phone => {
        console.log(phone)

        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-base-100 shadow-xl border-2 border-[#CFCFCF] shadow-[none]`
        phoneCard.innerHTML = `
            <div class="bg-[#0D6EFD0D] w-[300px] h-[300px] m-auto flex items-center justify-center rounded-2xl mt-6">
                <figure><img src="${phone.image}" alt="Shoes" /></figure>
            </div>
            <div class="card-body text-center items-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        containerCard.appendChild(phoneCard)
    });
}

loadPhone()


const search = () => {
    const searchFild = document.getElementById('search_fild');
    const searchText = searchFild.value;
    console.log(searchText)
    loadPhone(searchText)
}