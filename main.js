function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');
  
    // Ibaratnya di bawah ini adalah .c
    var vertexShaderSource = `
      void main() {
        gl_PointSize = 25.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      }
    `;
    var fragmentShaderSource = `
      void main() {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
    `;
  
    // Ibaratnya di bawah ini adalah .o
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  
    // Ibarat mengetikkan teks source code ke dalam penampung .c
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
  
    // Ibarat mengompilasi .c menjadi .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
  
    // Ibarat membuatkan penampung .exe
    var shaderProgram = gl.createProgram();
  
    // Ibarat memasukkan "adonan" .o ke dalam penampung .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
  
    // Ibarat menggabung-gabungkan "adonan" yang ada di dalam penampung .exe
    gl.linkProgram(shaderProgram);
  
    // Ibarat memulai menggunakan "cat" .exe ke dalam konteks grafika (penggambaran)
    gl.useProgram(shaderProgram);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    var primitive = gl.POINTS;
    var offset = 0;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);
  }
  