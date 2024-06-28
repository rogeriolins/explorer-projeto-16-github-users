export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "120000",
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: "96",
        followers: "160000",
      },
      {
        login: "rogeriolins",
        name: "Rogerio Lins",
        public_repos: "716",
        followers: "240000",
      },
    ]
  }

  delete(user) {
    // Higher-Order Functions (map, filter, find, reduce)
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    )
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector("table tbody")
    this.update()
  }

  update() {
    // Primeiro passo, remover os TRs
    this.removeAllTr()

    this.entries.forEach((user) => {
      const row = this.createRow()

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Foto do(a) ${user.name}`

      row.querySelector(".user p").textContent = user.name

      row.querySelector(".user span").textContent = user.login

      row.querySelector(".repositors").textContent = user.public_repos

      row.querySelector(".followers").textContent = user.followers

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja apagar essa linha?")
        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement("tr")
    tr.innerHTML = `
            <td class="user">
              <img
                src="https://github.com/rogeriolins.png"
                alt="Foto de Rogério Lins"
              />
              <a href="https://github.com/rogeriolins">
                <p>Rogerio Lins</p>
                <span>rogeriolins</span>
              </a>
            </td>
            <td class="repositors">36</td>
            <td class="followers">2</td>
            <td>
              <button class="remove">&times;</button>
            </td>    
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove()
    })
  }
}
