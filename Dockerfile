# Bước 1: Xây dựng ứng dụng Next.js
FROM node:16 AS builder

# Tạo thư mục làm việc
WORKDIR /app
# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép mã nguồn của ứng dụng vào container
COPY . .
# Xây dựng ứng dụng Next.js
RUN npm run build

# Bước 2: Chạy ứng dụng Next.js
FROM node:16

WORKDIR /app

# Sao chép các phụ thuộc và mã nguồn đã xây dựng từ bước trước
COPY --from=builder /app ./

# Chạy ứng dụng khi container khởi động
CMD ["npm", "start"]