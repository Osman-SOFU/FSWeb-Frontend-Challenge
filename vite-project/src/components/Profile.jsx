export default function Profile() {
  return (
    <div>
      <h2>PROFİL</h2>
      <div>
        <div>
          <h3>Basic Information</h3>
          <p>Doğum tarihi </p>
          <p>İkamet Şehri</p>
          <p>Eğitim Durumu</p>
          <p>Tercih Ettiği Rol</p>
        </div>
        <div>
          <p> 24.03.1996</p>
          <p> Ankara</p>
          <p> Hacettepe Ünv. Biyoloji Lisans, 2016</p>
          <p>Frontend, UI</p>
        </div>
        <div>
          <img
            src="src/assets/images/profilelogo.svg"
            className="w-2 h-2" // Resim boyutunu belirleyin
          />
        </div>
        <div>
          <h3>About Me</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}
