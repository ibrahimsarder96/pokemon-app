import Image from "next/image";
import img1 from '/public/Image01.png';
import img2 from '/public/Image02.png';
import img3 from '/public/Image03.png';
import img4 from '/public/Image04.png';
import img5 from '/public/Image05.png';

const Blog = () => {
  return (
    <div className="bg-white grid sm:grid-cols-1 lg:grid-cols-2 gap-5 mt-10 w-screen px-4">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1">
      <div className="col-span-2">
      <h1 className="text-black text-justify">What distinguishes a fictional universe from a simple setting is the level of detail and internal consistency. A fictional universe has an established continuity and internal logic that must be adhered to throughout the work and even across separate works.
     </h1>
     <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 my-4 mr-5">
      <div>
      <h1 className="text-black text-justify"> So, for instance, many books may be set in conflicting fictional versions of Victorian London, but all the stories of Sherlock Holmes are set in the same Victorian London. However, the various film series based on Sherlock Holmes follow their own separate continuities,
     </h1>
      </div>
      <div>
      <Image src={img4} width='300' height='100'></Image>
      </div>
     </div>
     <h1 className="text-black text-justify">The history and geography of a fictional universe are well defined, and maps and timelines are often included in works set within them. Even new languages may be constructed. When subsequent works are written within the same universe, care is usually taken to ensure that established facts of the canon are not violated.
     </h1>
      </div>
      <div>
        <div  className="mb-5">
        <Image src={img3} width='300' height='100'></Image>
        </div>
        <Image src={img2} width='300' height='100'></Image>
      </div>
      </div>
      <div>
        <div>
        <h1 className="text-black text-justify">A modern example of a fictional universe is that of the Avatar film series, as James Cameron invented an entire ecosystem, with a team of scientists to test whether it was viable. Additionally, he commissioned a linguistics expert to invent the Na'vi language.
     </h1>
        </div>
     <div className="grid grid-cols-3 my-5">
      <div>
      <Image src={img5} width='300' height='100'></Image>
      </div>
      <div className="col-span-2">
      <h1 className="text-black text-justify">Virtually every successful fictional TV series or comic book develops its own "universe" to keep track of the various episodes or issues. Writers for that series must follow its story bible,[3] which often becomes the series canon.Frequently, when a series is perceived by its creators as too complicated or too self-inconsistent (because of, for example, too many writers), the producers or publishers may introduce retroactive continuity (retcon) to make future editions easier to write and more consistent. This creates an alternate universe that future authors can write about.
     </h1>
      </div>
     </div>
     <div className="grid grid-cols-3">
      <div className="">
      <Image src={img1} width='300' height='100'></Image>
      </div>
      <div className="col-span-2">
      <h1 className="text-black my-5 text-justify">These stories about the universe or universes that existed before the retcon are usually not canonical, unless the franchise-holder gives permission. Crisis on Infinite Earths was an especially sweeping example.
Some writers choose to introduce elements or characters from one work into another, to present the idea that both works are set in the same universe. For example, the character of Ursula Buffay from American sitcom Mad About You was also a recurring guest star in Friends, despite the two series having little else in common.
     </h1>
      </div>
     </div>
      </div>
      <div>
       <h1 className="text-black text-justify"> Fellow NBC series Seinfeld also contained crossover references to Mad About You. L. Frank Baum introduced the characters of Cap'n Bill and Trot (from The Sea Fairies) into the Oz series in The Scarecrow of Oz, and they made a number of appearances in later Oz books. In science fiction,and they made a number of appearances in later Oz books. 
     </h1>
      </div>
      <div>
      <h1 className="text-black text-justify">A famous example of a detailed fictional universe is Arda (more popularly known as Middle-earth), of J. R. R. Tolkien's books The Lord of the Rings, The Hobbit, and The Silmarillion. He created first its languages and then the world itself, which he states was "primarily linguistic in inspiration and was begun in order to provide the necessary 'history' for the Elvish tongues."[2]</h1>
      </div>
    </div>
  );
};

export default Blog;