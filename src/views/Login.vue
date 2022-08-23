<template lang="">
  <div class="w-full flex flex-wrap">
    <!-- Login Section -->
    <div class="w-full md:w-1/2 flex flex-col">
      <div
        class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"
      >
        <img src="data:image/png;base64,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">
      </div>

      <div
        class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
      >
        <p class="text-center text-3xl">Welcome.</p>
        <form
          class="flex flex-col pt-3 md:pt-8"
          onsubmit="event.preventDefault();"
        >
          <div class="flex flex-col pt-4">
            <label for="email" class="text-lg">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <input
            type="submit"
            value="Log In"
            class="bg-black rounded-md text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
          />
        </form>
        <div class="text-center pt-12 pb-12">
          <p>
            Don't have an account?
            <router-link to="/register" class="underline font-semibold hover:text-blue-700"
              >Register here.
            </router-link>
          </p>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
      <img
        class="object-cover w-full h-screen hidden md:block"
        src="https://source.unsplash.com/IXUM4cJynP0"
      />
    </div>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");

.font-family-karla {
  font-family: karla;
}
body {
  background-color: #fff;
  font-family: "Karla", sans-serif;
  height: 100vh;
}
</style>
