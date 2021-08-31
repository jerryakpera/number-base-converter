function makeRequest(from, to, num) {
  const url = `http://localhost:3030/api/v1/nbc/convert/${from}/to-${to}/${num}`;

  return fetch(url)
    .then(processRequest)
    .then((data) => {
      displayConversion(data.conversion);
      // hideLoading();
      return data;
    })
    .catch((error) => {
      if (error.errors) {
        // hideLoading();
        // showErrorSnackbar(error.errors[0]);
        return;
      }

      // hideLoading();
      // showErrorSnackbar(error);
      return;
    });
}

async function processRequest(res) {
  if (!res.ok) {
    if (res.status === 400) {
      throw await res.json();
    }

    if (res.status === 403) {
      throw 'Unauthorized';
    }
    throw Error(res.statusText);
  }

  if (res.redirected) {
    window.location = res.url;

    if (res.json()) return res.json;
    return;
  }

  return res.json();
}
