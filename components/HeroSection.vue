<template>
  <section class="mx-auto py-12 font-inter">
    <!-- Hero Text -->
    <div class="text-center mb-12 mt-[100px]">
      <h1
        class="text-[56px] leading-normal font-normal font-newsreader md:text-[64px] mb-4 md:leading-[76.8px]"
      >
        We're <em class="font-italic">farmers, purveyors,</em> and eaters of
        <br />
        organically grown food.
      </h1>

      <button
        class="bg-tgreen-100 text-twhite-100 mt-[30px] px-6 py-3 font-semibold rounded-md hover:bg-tgreen-50 transition-colors t-normal-text"
      >
        <NuxtLink to="/products"> Browse our shop </NuxtLink>
      </button>
    </div>

    <!-- Image Grid -->
    <div
      class="flex lg:flex-row flex-col gap-8 mb-12 mt-[100px] w-full lg:px-0 px-6"
    >
      <div class="lg:mr-10 mx-auto">
        <img
          src="@/assets/images/spinach.png"
          alt="Fresh organic spinach"
          class="md:w-[504px] max-w-full md:h-[693px]"
        />
      </div>
      <div class="flex items-center lg:ml-auto mx-auto lg:mr-0">
        <div>
          <img
            src="@/assets/images/mixedvegetables.png"
            alt="Root vegetables and produce"
            class="max-w-full max-h-[480px]"
          />
          <p class="text-sm mt-2">
            <span class="font-semibold">Central California —</span>
            The soil and sky give these sun-touched (in Central California land,
            or, thankfully your water compensators)
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex lg:flex-row flex-col lg:space-x-[80px] t-paragraph mt-[10rem] max-w-[1440px] lg:mx-auto mx-5"
    >
      <h2 class="font-semibold uppercase tracking-wider text-sm mb-4 mx-auto">
        What we believe
      </h2>

      <div class="max-w-[822px]">
        <p>We believe in produce. Tasty produce. Produce like:</p>
        <br />
        <p class="">
          Apples, Oranges, Limes, Lemons, Guavas, Carrots, Cucumbers, Jicamas,
          Cauliflowers, Brussels sprouts, Shallots, Japanese eggplants,
          Asparagus, Artichokes—{Jerusalem artichokes, too, Radishes, Broccoli,
          Baby broccoli, Broccolini, Bok choy, Scallions, Ginger, Cherries,
          Raspberries, Cilantro, Parsley, Dill.
        </p>
        <br />
        <p class="">What are we forgetting?</p>
        <br />
        <p class="">
          Oh! Onions, Yams, Avocados, Lettuce, Arugula (to some, "rocket"),
          Persian cucumbers, in addition to aforementioned "normal" cucumbers,
          Artichokes, Zucchinis, Pumpkins, Squash (what some cultures call
          pumpkins), Sweet potatoes and potato-potatoes, Cherimoyas, Monk fruit,
          Fruit of the Loom, Fruits of our labor (this website), Sorrel,
          Pineapple, Mango, Gooseberries, Blackberries, Tomatoes, Heirloom
          tomatoes, Beets, Chives, Corn, Endive, Escarole, which, well yeah,
          we're vendors of organic produce, but if you asked us to describe what
          escaroles are...
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.font-serif {
  /* You might want to import a serif font that matches the design */
  font-family: 'Times New Roman', serif;
}

.font-italic {
  font-style: italic;
}
</style>
