import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { UserContext } from "../Context/UserContext";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  console.log({ user });
  return (
    <div>
      <HeroSection>
        <div className="flex flex-wrap justify-left items-center h-full pt-80 px-5 max-w-xl">
          <div className="text-6xl md:text-7xl text-white font-bold">
            Nature is so beautifull
          </div>
        </div>
      </HeroSection>
      <div className="bg-slate-800 relative" style={{ contain: "paint" }}>
        <div className="sticky top-0">
          <div className="text-black text-4xl absolute top-[200px] translate-x-1/2 z-[0] right-0 bg-[#c6c6c6] rounded-full w-[600px] h-[200px] flex items-center px-40 justify-cente">
            Krishna
          </div>
        </div>
        <div className="text-3xl relative z-10 max-w-5xl px-6 flex flex-wrap">
          {user && user?.email}
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          dui ut mauris egestas hendrerit id non lacus. Mauris vestibulum neque
          at libero convallis, eget commodo diam accumsan. In hendrerit, arcu id
          luctus fermentum, mauris sapien consequat nulla, quis congue lacus
          tortor et nulla. Fusce a rutrum ex. Sed molestie turpis purus. Mauris
          vestibulum porttitor rhoncus. Aliquam erat volutpat. Integer sed
          mauris lacus. Sed id nisl vestibulum, commodo sapien et, vehicula ex.
          Suspendisse leo neque, condimentum vitae magna congue, commodo
          bibendum metus. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Suspendisse nec tortor velit. Duis
          suscipit eget augue id consectetur. Ut elementum eget metus non
          tincidunt. Sed lacinia tincidunt dui eu auctor. Curabitur sodales
          augue sit amet viverra vulputate. Praesent tempor nisi magna, vel
          viverra mauris cursus a. Vivamus in dolor ut purus eleifend ornare non
          consequat leo. Fusce scelerisque augue sed consequat molestie.
          Suspendisse pharetra blandit hendrerit. Mauris consequat porta ante,
          et egestas mi placerat laoreet. Aliquam a volutpat diam. Mauris
          lobortis posuere rhoncus. Donec lectus diam, placerat vel bibendum sit
          amet, mattis id augue. Vivamus in mi odio. Aenean lacus nulla,
          condimentum non eros sed, rutrum faucibus dolor. Aenean nec interdum
          enim. Aenean lacus mi, gravida a mattis a, mollis eu ex. Donec tempus
          est quam, sit amet rutrum enim posuere ac. Mauris efficitur accumsan
          placerat. Vivamus sapien ligula, consectetur et felis ut, tincidunt
          porttitor ipsum. Proin commodo accumsan purus, eu cursus augue
          accumsan vitae. Vestibulum quis porttitor ligula. Proin condimentum
          mattis vehicula. Integer eget bibendum urna, ac placerat libero. Morbi
          lacinia faucibus auctor. Aliquam nec bibendum velit. Nunc accumsan
          eleifend aliquet. Mauris ac facilisis magna, in consectetur enim.
          Morbi sodales diam enim, et egestas eros ullamcorper eget. Praesent
          sed elit nunc. Integer sit amet gravida mi. Maecenas consequat tellus
          nec maximus rutrum. Nulla facilisi. Donec sit amet turpis vel risus
          dictum porttitor in suscipit mi. Integer elementum interdum tortor, eu
          iaculis nibh. In hac habitasse platea dictumst. Donec nec purus
          hendrerit, tempor erat ac, iaculis augue. Sed dignissim blandit porta.
          In hendrerit vestibulum elit nec venenatis. Pellentesque mollis nibh
          velit, ac imperdiet leo maximus nec. Pellentesque cursus lorem at eros
          fermentum, nec ornare nulla ultrices. In vel placerat odio. Donec
          efficitur mauris eget lorem convallis, ac auctor ligula hendrerit.
          Suspendisse eu nisi in nisl sollicitudin lobortis vitae ac enim.
          Vivamus lacinia nibh in luctus cursus. Phasellus vestibulum id nunc ac
          sollicitudin. Donec viverra interdum velit vitae rhoncus. Ut eu
          dapibus lectus, sit amet pellentesque risus. Integer sit amet sem
          sapien. Praesent quis convallis eros. Cras ut arcu posuere, faucibus
          arcu eu, cursus enim. Integer luctus diam nibh. Integer a placerat
          nibh. Vestibulum eu sollicitudin tellus. Donec risus quam, volutpat
          blandit orci eu, dignissim tincidunt nisi. Cras consectetur mauris at
          felis tempor, et sodales arcu pharetra. Morbi vitae elit sagittis nibh
          efficitur pellentesque in sed ex. Vivamus in massa nec risus iaculis
          ultricies. Vivamus commodo, dui eget maximus facilisis, mauris libero
          sagittis nisi, nec laoreet sem nibh quis felis. Cras pulvinar
          consequat fermentum. Aenean tincidunt fermentum magna ac bibendum. Ut
          varius scelerisque tellus. Ut erat mi, posuere et sollicitudin id,
          vestibulum quis odio. Curabitur mollis lectus ac nisl hendrerit
          fringilla. Integer lobortis nisi diam, ac tincidunt erat congue ut.
          Donec at ligula sed urna scelerisque iaculis. Vestibulum sit amet
          bibendum mi, non vulputate orci. Sed in aliquet tellus. Ut mattis
          fringilla iaculis. Mauris id sollicitudin odio, nec mollis felis.
          Donec dui ex, viverra quis suscipit quis, varius eu dui. Maecenas
          finibus tellus mauris, nec consequat tellus commodo at. Nunc vitae
          eleifend sem, eget aliquam tortor. Morbi eleifend arcu nibh, quis
          elementum erat suscipit eget. Donec in commodo felis, sed viverra
          augue. Pellentesque nec pretium orci. Ut porttitor ante at sagittis
          aliquet. Integer porta varius nulla a imperdiet. Duis posuere varius
          nisl, et hendrerit diam interdum nec. Nunc tempor, risus eget placerat
          suscipit, magna leo egestas diam, at pellentesque dolor arcu ut nunc.
          Praesent hendrerit nec ex at scelerisque. Suspendisse potenti. Quisque
          eget sem viverra, rutrum tellus a, elementum sem. Pellentesque pretium
          pretium tellus, non tristique risus tempus vel. Donec congue, sem
          vitae fringilla finibus, magna magna pellentesque eros, eget lacinia
          enim odio sit amet ipsum. Fusce non orci consectetur, feugiat est in,
          fringilla mauris. Pellentesque a felis venenatis, efficitur tellus in,
          congue erat. Sed et laoreet libero, id mattis ex. Morbi mi mauris,
          ultricies at tempus aliquam, sollicitudin vitae purus. Aenean ut
          dapibus enim, id lobortis dolor. Cras egestas elit et lorem finibus
          porta. Donec bibendum nulla dictum, tempor ex laoreet, fermentum
          lacus. Cras mattis velit tellus, vitae tincidunt quam luctus non.
          Proin id purus dictum, congue dolor nec, aliquet mi. Praesent mattis,
          ex in elementum porttitor, odio lacus vestibulum urna, quis
          pellentesque massa nibh et lectus. Cras aliquam justo id quam
          scelerisque placerat. Vestibulum at sodales sapien. Cras eros magna,
          sollicitudin eget placerat vel, tincidunt nec tellus. Suspendisse
          sollicitudin libero vitae ultricies dapibus. Quisque luctus ac orci
          vel dignissim. Nunc commodo ante sit amet erat maximus, in euismod
          lectus pellentesque. Donec in ornare ipsum. Mauris libero velit,
          condimentum in ultricies non, finibus eget risus. Sed ullamcorper
          nulla ut risus imperdiet fringilla. Mauris faucibus, erat suscipit
          gravida commodo, nunc nunc rutrum ipsum, laoreet pellentesque mauris
          augue ut leo. Pellentesque accumsan volutpat sapien nec laoreet. Nulla
          accumsan ipsum eget sem iaculis, vitae vehicula velit pellentesque.
          Praesent eget varius ex. Nullam ultricies tortor scelerisque magna
          suscipit, semper varius est porta. Nunc iaculis tincidunt congue.
          Vestibulum pulvinar tempor lectus, interdum semper dui tincidunt id.
          Nullam finibus risus id eros porta, sed lacinia urna dictum. Etiam
          venenatis orci tellus, semper efficitur nisl luctus ultrices.
          Suspendisse in fermentum massa. Nam eu neque dapibus, porttitor tellus
          et, luctus odio. Aenean auctor dictum sollicitudin. Sed porttitor odio
          eget nulla pellentesque, vitae fringilla tellus placerat. Fusce semper
          faucibus ante id hendrerit. Mauris placerat lacus a luctus consequat.
          Mauris porta commodo massa eu consectetur. Nullam vel elit at magna
          sollicitudin semper viverra ac lectus. Mauris sit amet sapien
          facilisis risus consequat lobortis. Duis suscipit, enim id lobortis
          pulvinar, purus tellus semper justo, ut congue lectus metus eget
          tortor. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Nunc euismod eros magna, condimentum
          semper tortor tincidunt in. Proin et tincidunt ex. Maecenas sagittis,
          sapien ut dapibus sagittis, arcu lectus suscipit nunc, eu blandit
          risus nulla at purus. Nam augue risus, varius nec malesuada eget,
          dignissim ac dolor. Nullam ut condimentum enim. Nam euismod sodales
          mi, eu rhoncus nibh dignissim eget. Etiam eu lacinia lacus. Duis quis
          ipsum sit amet risus lobortis maximus sit amet vel felis. Mauris
          molestie nisi ut massa viverra, vel vestibulum erat consequat. Etiam
          diam tellus, interdum sed mauris vel, commodo bibendum mauris.
          Praesent sed consectetur urna, vel aliquam erat. Nulla facilisi.
          Phasellus fringilla aliquam sapien id dignissim. Vestibulum neque
          ipsum, dictum tristique consequat non, iaculis in orci. Aliquam vitae
          augue eget felis aliquam auctor. Proin elit dui, porta at leo id,
          sodales suscipit sem. Quisque et purus tempor sapien commodo hendrerit
          commodo in nisi. Nam eu convallis sem. Nulla commodo, justo ut congue
          consequat, ligula lacus luctus leo, et porta mi tortor a lacus.
          Quisque lacus turpis, scelerisque a sapien sed, tincidunt hendrerit
          nisl. Praesent lorem erat, scelerisque quis mollis et, condimentum ut
          metus. Cras eget sapien libero. Aenean viverra viverra posuere.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer pulvinar nulla venenatis metus
          fermentum sagittis. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Mauris finibus consectetur
          ligula auctor interdum. Vestibulum vel leo felis. Nulla ac augue sit
          amet mi posuere maximus vel sed lorem. Quisque odio lectus, gravida id
          tempor vel, lobortis id turpis. Pellentesque et sagittis magna, tempor
          mattis tortor. Quisque in rutrum ante. Aliquam viverra in eros nec
          posuere. Aliquam consectetur turpis risus, nec efficitur enim sagittis
          eget. Nulla facilisi. Curabitur a odio porttitor, molestie orci quis,
          eleifend ligula. Donec porttitor sollicitudin pulvinar. Sed lobortis
          ipsum dictum nunc venenatis vulputate. Nunc euismod leo sed nulla
          pretium, sed consequat est imperdiet. Curabitur pellentesque mollis
          vestibulum. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Sed pulvinar sapien eget dolor suscipit lacinia. Morbi non
          orci sem. Fusce sollicitudin orci id ante imperdiet, sed placerat
          dolor viverra. Aliquam volutpat nisi est, ut congue nisi ultricies et.
          In arcu neque, sodales in felis et, laoreet pulvinar purus. Proin sit
          amet pellentesque leo, sit amet dapibus erat. Donec nec faucibus
          felis, eget semper arcu. Phasellus vulputate mattis turpis. Aliquam
          vel pulvinar magna, a vehicula leo. Pellentesque ut massa luctus,
          sodales libero a, blandit turpis. Integer vitae molestie diam. Nulla
          at enim id dolor commodo blandit varius ac dui. Mauris vitae urna quis
          sem efficitur accumsan. Vivamus lectus nisi, mollis quis finibus quis,
          fringilla non magna. Phasellus vitae malesuada libero. Nulla ipsum
          arcu, rutrum ac rutrum eu, euismod eu magna. Aliquam ut ante
          ullamcorper, euismod orci sit amet, blandit nisi. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Cras ac tristique
          urna, in viverra orci. In pellentesque volutpat neque, ac lacinia nibh
          viverra eget. Aliquam purus orci, mollis eget egestas non, vestibulum
          eu enim. Proin a sagittis ex. Aenean congue ante ac ipsum congue,
          pellentesque fringilla ex placerat. Proin aliquet, sem at faucibus
          elementum, urna tellus laoreet tortor, rutrum pretium nibh nulla quis
          metus. Vestibulum condimentum, elit sed sagittis congue, ex leo
          egestas odio, id ornare est ipsum eget lacus. Donec nec eros in lectus
          interdum dictum quis id eros. Donec sapien diam, iaculis vel quam nec,
          convallis luctus lacus. Pellentesque vehicula, lectus quis tristique
          sagittis, elit velit interdum massa, at rhoncus nisi sem ut urna.
          Praesent viverra lectus non augue porttitor interdum. Donec non
          suscipit mauris, non egestas dolor. Integer semper dapibus nisi, id
          tincidunt sem lobortis in. Praesent ac fermentum leo. Nam dapibus
          justo ex, vitae placerat arcu vulputate non. Aliquam dignissim arcu
          volutpat mattis fringilla. Aliquam erat volutpat. Quisque congue
          dignissim tincidunt. Praesent luctus, odio ac ornare consequat, tellus
          tellus ornare ipsum, non commodo enim sem ullamcorper justo. Aenean
          mollis, turpis quis cursus imperdiet, mi neque rutrum justo, sed
          auctor magna felis ut risus. Ut tempor vel lectus eget sodales.
          Quisque nec augue purus. Etiam nec sem ullamcorper, pretium elit at,
          molestie ipsum. Nullam sit amet feugiat ipsum. Maecenas ac sapien vel
          urna interdum lobortis nec ut libero. In hac habitasse platea
          dictumst. Ut ac orci ante. Phasellus ac convallis massa, vitae auctor
          nibh. Ut eu massa a odio posuere fringilla. Phasellus rutrum imperdiet
          odio ac mattis. Proin et tempus diam. Donec malesuada bibendum libero
          vitae congue. Ut imperdiet ullamcorper ultricies. Donec tincidunt,
          justo at consequat commodo, urna enim rutrum leo, eget rhoncus eros ex
          eget lectus. Integer in mauris nec quam interdum euismod vel non
          purus. Morbi quis efficitur nisi, nec facilisis est. Nam dictum dolor
          non mauris tempus, sit amet maximus nisi feugiat. Etiam tincidunt
          feugiat semper. Duis hendrerit, dui vel dapibus consectetur, enim
          libero vestibulum neque, ut vulputate urna elit vitae nisi. Proin
          hendrerit dolor ultrices porttitor aliquam. Cras maximus lectus ac
          vulputate porttitor. Donec et quam non lacus elementum luctus. Morbi
          vestibulum lacinia mi vel posuere. Mauris ut facilisis eros, id mollis
          urna. Nam hendrerit sed est vel aliquet. Nam in arcu at diam
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
