import { useState } from "react";
import { motion } from "framer-motion";

function Burger() {
  return (
    <button className="fixed top-5 right-5 z-50 bg-white/80 backdrop-blur p-3 rounded-2xl shadow hover:scale-105 transition">
      <div className="space-y-1">
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </div>
    </button>
  );
}

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

function ContactForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Réserver une séance</h2>

        <form
          action="https://formsubmit.co/test@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            className="w-full p-3 border rounded-xl"
            required
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
            Envoyer
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 underline"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      <Burger />

      {open && <ContactForm onClose={() => setOpen(false)} />}

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Maïeusthésie : Retrouvez votre élan vital
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-10">
          Vous vous sentez bloqué, épuisé ou envahi par des émotions que vous ne maîtrisez plus ?
        </p>
        <Button onClick={() => setOpen(true)}>
          Réserver ma séance
        </Button>
      </section>

      {/* APPROCHE */}
      <section className="py-28 px-6 max-w-4xl mx-auto border-t">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          La maïeusthésie, c’est quoi au juste ?
        </h2>

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            La maïeusthésie n'est pas une thérapie de plus. C'est une méthode de communication thérapeutique directe, douce et radicalement efficace.
          </p>
          <p>
            Contrairement aux approches classiques qui cherchent à supprimer le symptôme, nous allons rencontrer la cause.
          </p>
        </div>

        {/* VIDEO */}
        <div className="my-16 w-full h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
          <span className="text-gray-500">Vidéo de présentation ici</span>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>Rapidité : On ne tourne pas autour du pot.</p>
          <p>Douceur : Aucun forçage.</p>
          <p>Durable : Le symptôme disparaît naturellement.</p>
        </div>
      </section>

      {/* BENEFICES */}
      <section className="bg-blue-50 py-28 px-6 border-t">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            "Clarté mentale",
            "Ouverture du cœur",
            "Libération physique",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-xl mb-2">{item}</h3>
              <p className="text-gray-600">Un mieux-être profond</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARCOURS */}
      <section className="py-28 px-6 max-w-4xl mx-auto border-t space-y-6 text-gray-600">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Mon parcours
        </h2>
        <p>
          Après 13 ans dans la protection de l'enfance, j'ai côtoyé les blessures humaines au plus près.
        </p>
        <p>
          Cette expérience m'a questionné sur les blessures d'enfance et leur impact à l'âge adulte.
        </p>
        <p>
          La maïeusthésie a transformé ma vision de l'humain.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-28 px-6 bg-gray-50 border-t text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Séance individuelle – En présentiel ou à distance. Pour toute question ou prise de rendez-vous, utilisez le formulaire.
        </p>
        <Button onClick={() => setOpen(true)}>
          Réserver ma séance
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="mb-2">MoHssin Sebbagh</p>
        <p className="text-sm text-gray-400">test@gmail.com</p>
      </footer>
    </div>
  );
}