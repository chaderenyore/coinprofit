<template>
  <main v-if="post" class="pt-24">
    <article class="article-container p-0 rounded-3xl w-[90%] m-auto">
      <header>
        <PrismicImage class="rounded-3xl mb-4" :field="post.data.cover_image" />
        <section class="w-[90%] m-auto">
          <p class="article-date font-medium text-[0.9375rem]">
            <time> {{ articleDate }}</time>
          </p>
          <h1 class="text-2xl text-[#3374EA] font-bold">
            {{ $prismic.asText(post.data.article_title) }}
          </h1>
          <section class="mt-5">
            <ul class="flex flex-row gap-3 justify-around">
              <li
                v-for="tag in post.tags"
                :key="tag"
                class="article-tag text-sm text-[#3374EA] rounded-full px-3 py-2"
              >
                #{{ tag }}
              </li>
            </ul>
          </section>
          <figure class="flex flex-row gap-3 mt-4 items-center">
            <PrismicImage
              class="w-16 h-16 rounded-full border-4 border-[#ECF5FF]"
              :field="author.avatar"
            />
            <figcaption class="flex flex-col gap-1">
              <h1 class="font-bold text-lg text-[#3374EA]">
                <PrismicRichText :field="author.name" wrapper="h1" />
              </h1>
              <h5 class="author-bio text-sm font-medium">
                <PrismicRichText :field="author.bio" wrapper="h5" />
              </h5>
            </figcaption>
          </figure>
        </section>
      </header>
      <main>
        <SliceZone :slices="post.data.body" :components="components" />
      </main>
    </article>
  </main>
</template>

<script>
import { defineSliceZoneComponents } from "@prismicio/vue";
import IntroductionText from "@/components/Slices/IntroductionText.vue";
import TextParagraphs from "@/components/Slices/TextParagraphs.vue";
import ImageCard from "@/components/Slices/ImageCard.vue";
import ImageGallery from "@/components/Slices/ImageGallery.vue";

export default {
  data() {
    return {
      post: null,
      components: defineSliceZoneComponents({
        introduction: IntroductionText,
        text_paragraphs: TextParagraphs,
        image: ImageCard,
        gallery_of_images: ImageGallery,
      }),
      articleDate: null,
      author: null,
    };
  },
  methods: {
    async getPost() {
      this.post = await this.$prismic.client.getByUID(
        "articles",
        this.$route.params.uid,
        {
          fetchLinks: ["author.name", "author.avatar", "author.bio"],
        }
      );

      this.author = this.post.data.author.data;

      console.log(this.post);
      const date = new Date(this.post.first_publication_date);
      this.articleDate = date.toLocaleString([], {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },

  created() {
    this.getPost();
  },
};

// import NotFound from "@/components/Help/NotFound.vue";
// import { ref } from "vue";
// import { useRoute } from "vue-router";
// import {
//   usePrismicDocumentByUID,
//   defineSliceZoneComponents,
// } from "@prismicio/vue";
// import BannerImage from "../../components/Slices/BannerImage.vue";
// import GalleryAndText from "../../components/Slices/GalleryAndText.vue";

// export default {
//   setup() {
//     const route = useRoute();
//     const { data: post } = usePrismicDocumentByUID(
//       "help_post",
//       route.params.uid
//     );

//     const components = ref(
//       defineSliceZoneComponents({
//         banner_image: BannerImage,
//         gallery_and_text: GalleryAndText,
//       })
//     );

//     return {
//       post,
//       components,
//     };
//   },

//   // components: {
//   //   NotFound,
//   // },
// };
</script>

<style scoped>
.article-container {
  background: var(--article-container);
  box-shadow: 0 20px 17px #1c192305;
}
.article-date {
  color: var(--article-date);
}
.article-tag {
  background: var(--article-tag);
}

.author-bio {
  color: var(--author-bio);
}
</style>
