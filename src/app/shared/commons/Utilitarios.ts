export class Utilitarios {
  public static getEmailPattern(): RegExp {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  public static unMask(value: string): string {
    if (typeof value == 'string') {
      return convertToSlug(value)
    } else {
      return value
    }
  }

  public static isNullOrEmpty(field) {
    if (!field || field == '' || field == 'undefined' || field == undefined) {
      return true
    }
    return false
  }
}


export const convertToSlug = (text) => {
  const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:; '
  const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------ '
  const p = new RegExp(a.split('').join('|'), 'g')
  return text.toString().toLowerCase().trim()
    .replace(p, c => b.charAt(a.indexOf(c))) // Substitui os caracteres especiais
    .replace(/&/g, '-and-') // Substitui & por and
    .replace(/[^\w\s]/gi, '') // Substitui espaços, caracteres não verbais e hífens por um único hífen (-)
    .replace(/\s+/g, ' ')
}