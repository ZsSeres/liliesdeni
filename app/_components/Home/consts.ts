const weddingDate = new Date('2026-05-16T16:00:00'); // TODO: double check time

export const weddingPlace = "Zselic Völgye"

export const getRemainingTimeInSeconds = () =>
  Math.floor((weddingDate.getTime() - Date.now()) / 1000);


export const getFormattedWeddingDate = () => {
  return new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(weddingDate);
}