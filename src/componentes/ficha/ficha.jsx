import React, { useState } from "react";
import "./ficha.css";

function Ficha() {
  const [personagem, setPersonagem] = useState({
    quadro: "Akame",
    img: "https://i.redd.it/akame-esdeath-vs-tsunade-mei-v0-t8qw95ar1e8e1.jpg?width=1344&format=pjpg&auto=webp&s=890a609c29a61b585557dba02860ff5b7e29b0dd",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  });

  const HandClick = (quadro) => {
    const imgs = {
      Akame:
        "https://i.redd.it/akame-esdeath-vs-tsunade-mei-v0-t8qw95ar1e8e1.jpg?width=1344&format=pjpg&auto=webp&s=890a609c29a61b585557dba02860ff5b7e29b0dd",
      Bulat:
        "https://taliopharowords.com/wp-content/uploads/2024/01/Bulatface4-1024x511.jpg",
      Chelsea:
        "https://pm1.aminoapps.com/6318/dcbf3936d010333c77f3eb987f16946d7314a953_hq.jpg",
      Leone: "https://i.ytimg.com/vi/frA7ppWrHbw/maxresdefault.jpg",
      Lubbok:
        "https://taliopharowords.com/wp-content/uploads/2024/03/Lubbockface1-1024x485.jpg",
      Mine: "https://i.pinimg.com/originals/3c/b1/c1/3cb1c10019c7f2b7445f3d5ba285271d.jpg",
      Najenda:
        "https://taliopharowords.com/wp-content/uploads/2024/04/Najendaface1-1024x551.jpg",
      Sheele:
        "https://preview.redd.it/stop-right-there-this-is-a-sheele-appreciation-post-say-v0-8xtnmpk4zgca1.jpg?auto=webp&s=971f85e824a2178b784fd4664d84af0385449e9d",
      Susano:
        "https://resizing.flixster.com/VG-8Oi7gsFZSFu-1Uwe9eUXVM3o=/620x336/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11326929_e_h8_aa.jpg",
      Tatsumi:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/Akame-Ga-Kill-Tatsumi.jpg",
    };

    const descricoes = {
      Akame:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      Bulat:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      Chelsea:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
      Leone:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      Lubbok:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Mine: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      Najenda:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      Sheele:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      Susano:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      Tatsumi:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..",
    };

    const novaDescricao = descricoes[quadro] || "Descrição não disponível";
    const novaImagem = imgs[quadro] || "";

    setPersonagem({
      quadro: quadro,
      img: novaImagem,
      descricao: novaDescricao,
    });
  };

  return (
    <div className="ficha">
      <div className="botoes">
        <button onClick={() => HandClick("Akame")}>Akame</button>
        <button onClick={() => HandClick("Bulat")}>Bulat</button>
        <button onClick={() => HandClick("Chelsea")}>Chelsea</button>
        <button onClick={() => HandClick("Leone")}>Leone</button>
        <button onClick={() => HandClick("Lubbok")}>Lubbok</button>
        <button onClick={() => HandClick("Mine")}>Mine</button>
        <button onClick={() => HandClick("Najenda")}>Najenda</button>
        <button onClick={() => HandClick("Sheele")}>Sheele</button>
        <button onClick={() => HandClick("Susano")}>Susano</button>
        <button onClick={() => HandClick("Tatsumi")}>Tatsumi</button>
      </div>
      <div className="container">
        <h2 className="nome">{personagem.quadro}</h2>

        <img
          src={personagem.img}
          alt={personagem.quadro}
          className="imagem-personagem"
        />

        <p className="texto-descricao">{personagem.descricao}</p>
      </div>
    </div>
  );
}

export default Ficha;
