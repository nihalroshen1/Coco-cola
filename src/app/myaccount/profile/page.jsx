
import Image from "next/image";
import cococola2 from '../../../../public/coco-cola/cococola2.jpg';
function Profile() {
  return (
    <>
      <h1>Profile page</h1>
      <Image src={cococola2.jpg} width={300} height={100} alt="/"/>

      <ul class="list-group">
        <li class="list-group-item">Name: Nihal Roshen</li>
        <li class="list-group-item">Address: Kottiyadan house ,poocholamdu</li>
        <li class="list-group-item">Qualification: Bca graduate</li>
        <li class="list-group-item">Postion:Front-end Developer</li>
        <li class="list-group-item">Projects:1-ecommerce Application</li>
      </ul>
    </>
  );
}

export default Profile;
