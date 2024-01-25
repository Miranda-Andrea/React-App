const about = () => {
  return (
    <section className="d-flex gap-3">  
        <article>
            <div>
                <img src="https://media.licdn.com/dms/image/D4E03AQG1hlc_pJye5A/profile-displayphoto-shrink_800_800/0/1702489141138?e=1711584000&v=beta&t=6jpIsO0s9wq3lTLfwcOOk76aAlKaBU9tMi35SfraTGY" 
                alt="Foto de perfil" 
                />
            </div>
        </article>
        <aside>
            <h1>Miranda Posadas</h1>
            <p><b>La muerte es solo el comienzo de otra gran aventura</b></p>
            <ul>
                <li>En proceso de ser desarrolladora Java</li>
                <li>Ingeniera eléctrica-electrónica</li>
                <li>Introvertida</li>
            </ul>
            <p className="font-bold"><b>Contactame</b></p>
            <p>Linkedin: https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit </p>
            <p>Github: https://github.com/Miranda-Andrea</p>
            <p>Gmail:miranda.andrea.fi@gmail.com</p>

            <section>
                <p className="font-bold">Lenguages and Tools</p>
                <ul className="list-grid">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Figma</li>
                    <li>Git</li>
                </ul>
            </section>
        </aside>
    </section>
  )
}

export default about;
