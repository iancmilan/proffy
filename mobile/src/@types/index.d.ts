// Como estamos utilizando TypeScript dentro do projeto, quando vamos fazer a importação de um arquivo png, o typescript não entende como um arquivo importável pelo javascript, porque até então(antes de existir o próprio react), não podiamos importar arquivos de umagem dentro de um arquivo javascript, então precisamos dizer, só no caso do react native, que temos a possibilidade de importar aquivos de imagem.

//Se caso eu for utilizar outros tipos de arquivos como jpg, gif, etc., é só fazer como na linha abaixo e mudar o nome da extensão do arquivo para o qual eu quero

declare module '*.png';