import { useState } from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition text-lg"
    >
      {children}
    </button>
  );
}

function Burger({ setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white/80 backdrop-blur p-3 rounded-2xl shadow"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </button>

      {open && (
        <div className="mt-2 bg-white rounded-2xl shadow p-4 space-y-2">
          <button onClick={() => { setPage("home"); setOpen(false); }}>Accueil</button>
          <button onClick={() => { setPage("method"); setOpen(false); }}>La méthode</button>
          <button onClick={() => { setPage("contact"); setOpen(false); }}>Contact</button>
        </div>
      )}
    </div>
  );
}

function ContactForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Réserver une séance</h2>

        <form action="https://formsubmit.co/test@gmail.com" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Nom" className="w-full p-3 border rounded-xl" required />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-xl" required />
          <textarea name="message" placeholder="Votre message" className="w-full p-3 border rounded-xl" required />

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">Envoyer</button>
        </form>

        <button onClick={onClose} className="mt-4 text-sm text-gray-500 underline">Fermer</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center mt-20">
      <p className="mb-2">MoHssin Sebbagh</p>
      <p className="text-sm text-gray-400">test@gmail.com</p>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      <Burger setPage={setPage} />

      {openForm && <ContactForm onClose={() => setOpenForm(false)} />}

      {/* HOME */}
      {page === "home" && (
        <section >
          
          <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-50 to-white">
            
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">
              Maïeusthésie
            </h1>

            {/* Mettre dans un bloc de texte en base de la page  */}
            <p><strong>13 ans d'expérience humaine :</strong></p>
            <p>Après une expérience de 13 ans dans la protection de l'enfance, j'ai côtoyé la réalité des blessures au plus près. Ce terrain m'a appris la force de la résilience, mais aussi les limites des mots quand le cœur reste fermé. Cette expérience m'a beaucoup questionné concernant les blessures d'enfance et la manière dont elles continuent de vibrer en nous à l'âge adulte.</p>

          </div>          
          

          <div >
            
            <p><strong>La révélation : La Maïeusthésie</strong></p>
            <p>C'est en vivant moi-même un accompagnement en maïeusthésie que j'ai trouvé les réponses. J'ai été épaté par la puissance de la transformation : là où l'on cherche souvent à "guérir" ou "effacer", la maïeusthésie permet de rencontrer. Cette approche a radicalement changé ma vision de l'humain. J'ai donc décidé de me former à mon tour pour mettre cette clarté et cette efficacité à votre service</p>

            <p><strong>Mon engagement pour vous</strong></p>
            <p>Je vous accompagne avec une posture de long cours : stable, solide et profondément respectueuse.</p>

            <p><strong>Délicatesse :</strong> On ne force aucune porte, on attend que vous soyez prêt.</p>
            <p><strong>Bienveillance :</strong> Un espace de sécurité totale pour tout exprimer, sans jugement.</p>
            <p><strong>Résultat :</strong> Une ouverture du cœur et une sensation de "mieux respirer" qui s'installent durablement. </p>

            <p className="italic text-center mt-10">
              "Mon rôle n'est pas de vous réparer, car vous n'êtes pas cassé. Mon rôle est d'être à vos côtés pour que vous puissiez enfin vous rencontrer réellement."
            </p>
          </div>

        </section>
      )}

      {/* METHOD */}
      {page === "method" && (
        <section className="px-6 py-24 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-center mb-10">
            Maïeusthésie : Retrouvez votre élan vital
          </h1>

          <p>​Vous vous sentez bloqué, épuisé ou envahi par des émotions que vous ne maîtrisez plus ?</p>
          <p>La maïeusthésie n'est pas une thérapie de plus. C'est une méthode de communication thérapeutique directe, douce et radicalement efficace.</p>

          <div className="my-12 h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
            Vidéo ici
          </div>

          <p><strong>Pourquoi ça marche ?</strong></p>
          <p>​Contrairement aux approches classiques qui cherchent à "supprimer" le symptôme (stress, angoisse, blocage), nous allons rencontrer la cause.</p>

          <p><strong>Ce que vous allez gagner :</strong></p>
          <p>​Clarté mentale : Un esprit plus apaisé et moins encombré.​Ouverture du cœur : Une reconnexion réelle avec vos émotions et les autres.</p>

          <p><strong>L'accompagnement en 3 étapes :</strong></p>
          <p>L'Écoute, La Rencontre, L'Apaisement</p>

          <p className="italic text-center mt-10">
            "Cesser de lutter contre soi-même pour enfin avancer."
          </p>

          <div className="text-center mt-10">
            <Button onClick={() => setOpenForm(true)}>Réserver ma séance</Button>
            <p className="mt-4 text-gray-500">Séance individuelle – En présentiel ou à distance.</p>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <section className="px-6 py-24 max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p>Pour toute question ou prise de rendez-vous.</p>
          <Button onClick={() => setOpenForm(true)}>Réserver ma séance</Button>
        </section>
      )}

      <Footer />
    </div>
  );
}