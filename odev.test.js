const isValidName  = require('./odev')
describe('isValidName', () => {
  it('Gelen ifade string  mi ?',()=>{
    expect(isValidName('string')).toBe(true)
  });
  it('Gelen ifade undefined mı?',()=>{
    expect(isValidName(undefined)).toBe(false)
  });
  it('Gelen ifade null mu?',()=>{
    expect(isValidName(null)).toBe(false)
  });
  it('Gelen ifade boş string mi?',()=>{
    expect(isValidName('')).toBe(false)
  });
  it('Gelen ifade false mu?',()=>{
    expect(isValidName(false)).toBe(false)
  });
  it('Gelen ifade karakter kaçırma ifadesi mi?',()=>{
    expect(isValidName('  \t\n')).toBe(false)
  });
  it('Gelen ifade tek karakter mi?',()=>{
    expect(isValidName('m')).toBe(false)
  });
  it('Birden fazla gelen ifade tek karakter mi?',()=>{
    expect(isValidName('m de v')).toBe(false)
  });
  it('Gelen ifade tek karakter ve boşluk içeriyor mu?',()=>{
    expect(isValidName(' jest   m demir    ')).toBe(false)
  });
  it('Gelen ifade karakter ve boşluk içeriyor mu?',()=>{
    expect(isValidName(' jest   mert demir    ')).toBe(true)
  });
  it('Gelen ifade kurallara uyuyor mu?',()=>{
    expect(isValidName('mert demir js')).toBe(true)
  });
})