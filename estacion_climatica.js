let numDias = 0;
    let sumaMax = 0;
    let sumaMin = 0;
    let numErrores = 0;

    function registrarTemperatura() {
      const maxTemp = parseInt(document.getElementById('maxTemp').value);
      const minTemp = parseInt(document.getElementById('minTemp').value);

      if (isNaN(maxTemp) || isNaN(minTemp) || maxTemp === 9 || minTemp === 9) {
        alert("Error: Las temperaturas deben ser números diferentes de 9.");
        return;
      }

      numDias++;
      sumaMax += maxTemp;
      sumaMin += minTemp;

      if (maxTemp === 9 || minTemp === 9) {
        numErrores++;
      }

      actualizarResultados();
    }

    function actualizarResultados() {
      const mediaMax = sumaMax / numDias;
      const mediaMin = sumaMin / numDias;
      const porcentajeErrores = (numErrores / numDias) * 100;

      document.getElementById('numDias').innerText = numDias;
      document.getElementById('mediaMax').innerText = mediaMax.toFixed(2);
      document.getElementById('mediaMin').innerText = mediaMin.toFixed(2);
      document.getElementById('numErrores').innerText = numErrores;
      document.getElementById('porcentajeErrores').innerText = porcentajeErrores.toFixed(2) + "%";
    }