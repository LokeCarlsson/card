const createSocialLink = (name: string, url: string, node: HTMLElement): void => {
  const element: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement
  const text: Text = document.createTextNode(url.replace(/\/$/, "").split("/").pop())
  element.appendChild(text)
  element.title = `${name} link`
  element.href = url
  node.appendChild(document.createTextNode(`${name}: `))
  node.appendChild(element)
}

export default createSocialLink