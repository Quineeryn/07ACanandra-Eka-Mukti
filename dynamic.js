
document.addEventListener('DOMContentLoaded', function () {
     // Mengambil referensi elemen-elemen HTML
    const peopleList = document.getElementById('peopleList');
    const friendList = document.getElementById('friendList');
    const friendCountElement = document.getElementById('friendCount');

    // Menginisialisasi jumlah teman
    let friendCount = 0;

    // Fungsi untuk memperbarui tampilan jumlah teman
    function updateFriendCount() {
        friendCountElement.textContent = `My Friends (${friendCount})`;
    }

    // Fungsi untuk membuat elemen orang dengan data yang diberikan
    function createPersonElement(username, nickname, personImage) {
        const personElement = document.createElement('div');
        personElement.classList.add('person');
        personElement.innerHTML = `
            <img src="${personImage}" alt="${username}">
            <div class="info">
                <h3>${username}</h3>
                <p>${nickname}</p>
            </div>
            <div class="button-container">
                <button class="follow-btn">Follow</button>
            </div>
        `;

        return personElement;
    }

     // Data orang-orang yang akan ditampilkan
    const peopleData = [
        { username: 'Canandra', nickname: '@canandrae', image:'cnn.jpg'},
        { username: 'Aryagara', nickname: '@aryagarakris', image: 'arya.jpg'},
        { username: 'Athalie', nickname: '@rathavlie', image: 'ath.jpg'},
        { username: 'Hafidzon', nickname: '@haalzi_', image: 'hfzn.jpg'},
        { username: 'Mutia', nickname: '@tiadita_', image: 'mutia.jpg'}, 
        { username: 'Xaviera', nickname: '@xavierasal', image: 'xv.jpg'},  
        { username: 'Naufal', nickname: '@fadhilazz', image: 'Nau.jpg'},
        { username: 'Fauza', nickname: '@nylasnn', image: 'fz.jpg'},
        { username: 'Nisrina', nickname: '@wafazakiy', image: 'nisrin.jpg'},
        { username: 'Najwan', nickname: '@zakyahm', image: 'nja.jpg'},
          
    ];

     // Melooping data orang dan membuat elemen-elemen
    peopleData.forEach(personData => {
        // Membuat elemen orang berdasarkan data yang diberikan
        const personElement = createPersonElement(personData.username, personData.nickname, personData.image);

        // Mengambil tombol follow pada elemen orang
        const followButton = personElement.querySelector('.follow-btn');

        // Menambahkan event listener saat tombol follow diklik
        followButton.addEventListener('click', () => {

            // Menambahkan event listener saat tombol follow diklik
            const friendElement = personElement.cloneNode(true);

            // Membuat tombol unfollow baru
            const unfollowButton = document.createElement('button');
            unfollowButton.textContent = 'Unfollow';
            unfollowButton.classList.add('unfollow-btn');

            // Menambahkan event listener saat tombol unfollow diklik
            unfollowButton.addEventListener('click', () => {
                 // Memindahkan kembali elemen orang ke daftar orang untuk di-follow
                peopleList.appendChild(personElement);
                friendList.removeChild(friendElement);
                friendCount--;
                updateFriendCount();
            });
            
            // Mengosongkan kontainer tombol lama dan menambahkan tombol unfollow
            friendElement.querySelector('.button-container').innerHTML = '';
            friendElement.querySelector('.button-container').appendChild(unfollowButton);
            
            // Menambahkan elemen teman ke daftar teman dan menghapus dari daftar orang untuk di-follow
            friendList.appendChild(friendElement);
            peopleList.removeChild(personElement);
            friendCount++;
            updateFriendCount();

        });

         // Menambahkan elemen orang ke daftar orang untuk di-follow
        peopleList.appendChild(personElement);
    });

    // Memperbarui tampilan awal jumlah teman
    updateFriendCount();

});

