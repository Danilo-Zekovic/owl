import React from 'react'
import Banner from './components/Banner'

const About = () => (
  <div>
    <Banner/>
    <div className='container'>
      <h1>O Blogu</h1>
      <blockquote>
        „Tajna problema“ je blog namenjen muškarcima i ženama svih uzrasta, ali pre svega mladima,
        koji se svakodnevno susreću sa mnogobrojnim problemima, a nemaju koga da pitaju za savet.
        Ovde možete da pronađete tekstove koji se bave raznim temama, pa tako možete da saznate
        nešto što niste znali ili da pronađete odgovor na pitanje koje niste smeli da postavite. Podstičem
        Vas da mi pošaljete pitanje koje Vas muči, i tako pomognete nekome, koga je bilo strah da
        postavi isto. Sva pitanja će biti objavljena anonimno, osim ukoliko želite da napišete Vaše ime,
        prezime ili nadimak. Potrudiću se da odgovor na postavljeno pitanje dam u najkraćem mogućem
        roku. Radujem se budućim porukama!
        <footer>Admin „Tajna problema“</footer>
      </blockquote>
    </div>
  </div>
)

export default About
