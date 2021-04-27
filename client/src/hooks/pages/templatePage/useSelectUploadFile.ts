
function useSelectUploadFile(): {
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const selectedFile = event.target.files[0];
      return selectedFile
    }
  }
  return {
    onChangeFile
  };
}

export default useSelectUploadFile;