const mehsullarim=document.getElementById('mehsullarim')

async function fetchData(url) {
    const res = await fetch(url);
    return res.json()
}

let Mehsul=[]
async function datalar() {
    Mehsul = await fetchData("https://fakestoreapi.com/products");
    mehsuladd()
}
mehsuladd()

function mehsuladd(){
    data.map(item=>{

        mehsullarim.innerHTML+=`
        
           <div   class="bg-white border  overflow-hidden  rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
                <div class="bg-white p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                  <img src="${item.image}" alt="sunglass6"
                    class="h-full mx-auto w-[50%] object-contain" />
                </div>
      
                <div class="p-6 bg-or">
                  <h3 class="text-lg font-bold text-gray-800">${item.title.slice(5)}</h3>
                  <div class="flex items-center justify-between mt-6">
                    <div
                      class="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"></path>
                      </svg>
                    </div>
                    <h4 class="text-lg text-gray-800 font-bold">${item.price} AZN</h4>
                  </div>
                </div>
              </div>
        `
    })
}
