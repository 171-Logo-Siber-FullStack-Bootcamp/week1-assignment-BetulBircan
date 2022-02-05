// buttona tıkladığımızda verinin gelmesi için oluşturulan js kodu 
document.querySelector("#getUsers").addEventListener('click',getUsers)

function getUsers() {
    
    // xmlhttprequest kullanılarak veri çekmesi için yeni xmlhttprequest nesnesi oluşturuldu.
    const xhr = new XMLHttpRequest()
    
    //"https://jsonplaceholder.typicode.com/users" apisinden get metodu ile veriyi alması için open özelliğ kulllanıldı
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
    
    // sayfada herhangi bir değişiklik olduğunda yani sunucudan bilgi istendiğinde tetiklenmesi için onreadystatechange özelliği kullanıldı
    xhr.onreadystatechange = function () {
    
    }
}
