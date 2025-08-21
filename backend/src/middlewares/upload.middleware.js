// multer is a middleware for handling multipart/form-data,
// which is primarily used for file uploads

import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimeType.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image file are followed"), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fieldSize: 5 * 1024 * 1024 }, // 5MB limit
});

export default upload;
